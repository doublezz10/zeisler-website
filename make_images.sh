#!/usr/bin/env bash
# Generate responsive, modern-format image variants for the website.
#
# For each source raster in assets/ this emits, into assets/gen/:
#   <stem>.webp        native width  (the 2x / retina candidate)
#   <stem>-<half>w.webp  half width  (the 1x candidate)
#   <stem>.avif        native width
#   <stem>-<half>w.avif  half width
# The originals are left in place and used as the <picture> fallback.
#
# Re-run after adding or replacing any source image. Requires ImageMagick
# (`magick`) with WebP + AVIF/HEIC delegates.
set -euo pipefail

cd "$(dirname "$0")"

if ! command -v magick >/dev/null 2>&1; then
    echo "error: ImageMagick 'magick' not found on PATH." >&2
    echo "       install it (e.g. 'brew install imagemagick') and re-run." >&2
    exit 1
fi

SRC="assets"
OUT="assets/gen"
mkdir -p "$OUT"

bytes() { stat -f '%z' "$1" 2>/dev/null || echo 0; }
human() { awk -v b="$1" 'BEGIN{u="B";n=b+0;if(n>1048576){n/=1048576;u="MB"}else if(n>1024){n/=1024;u="KB"};printf "%.0f%s",n,u}'; }

# gen SOURCE STEM KIND
#   KIND = photo  -> smoother content, smaller files
#   KIND = figure -> fine text/lines (paper figures, posters), higher quality
gen() {
    local src="$SRC/$1" stem="$2" kind="$3"
    local w h half dims
    dims="$(magick identify -format '%w %h' "$src")"
    w="${dims%% *}"
    h="${dims##* }"
    half=$(( w / 2 ))

    local wq2 wq1 aq2 aq1
    if [ "$kind" = "photo" ]; then wq2=82; wq1=76; aq2=60; aq1=52;
    else                          wq2=90; wq1=84; aq2=70; aq1=62; fi

    # native (2x)
    magick "$src" -strip -colorspace sRGB -resize "${w}x" \
        -quality "$wq2" -define webp:method=6 -define webp:auto-filter=true \
        "$OUT/${stem}.webp"
    magick "$src" -strip -colorspace sRGB -resize "${w}x" \
        -quality "$aq2" -define heic:speed=6 \
        "$OUT/${stem}.avif"
    # half (1x)
    magick "$src" -strip -colorspace sRGB -resize "${half}x" \
        -quality "$wq1" -define webp:method=6 -define webp:auto-filter=true \
        "$OUT/${stem}-${half}w.webp"
    magick "$src" -strip -colorspace sRGB -resize "${half}x" \
        -quality "$aq1" -define heic:speed=6 \
        "$OUT/${stem}-${half}w.avif"

    printf '%-22s %8s  ->  webp %8s / %8s   avif %8s / %8s   (native %sx, half %sx)\n' \
        "$stem" "$(human "$(bytes "$src")")" \
        "$(human "$(bytes "$OUT/${stem}.webp")")" "$(human "$(bytes "$OUT/${stem}-${half}w.webp")")" \
        "$(human "$(bytes "$OUT/${stem}.avif")")" "$(human "$(bytes "$OUT/${stem}-${half}w.avif")")" \
        "$w" "$half"
}

echo "Generating responsive image variants into $OUT ..."
echo "--------------------------------------------------------------------------------------------"
gen "headshot.jpg"          "headshot"         photo
gen "cajalclub_award.jpg"   "cajal-award"      photo
gen "MAPseq figure.png"     "mapseq-figure"    figure
gen "Timescales figure.png" "timescales-figure" figure
gen "COSYNE poster.png"     "cosyne-poster"    figure
gen "CSHL poster.png"       "cshl-poster"      figure
echo "--------------------------------------------------------------------------------------------"
echo "done. $(ls -1 "$OUT" | wc -l | tr -d ' ') variant files in $OUT"
