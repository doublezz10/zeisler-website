#!/bin/bash

# Define source and destination
SOURCE_DIR="/Users/zachz/Library/Mobile Documents/com~apple~CloudDocs/Zach/Delay Task/new_website"
DEST_DIR="/Users/zachz/Documents/new_website"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Sync files using rsync (recursive, verbose, human-readable)
# --delete removes files in destination that are no longer in source (optional, but keeps it clean)
echo "Syncing website files..."
rsync -av --delete "$SOURCE_DIR/" "$DEST_DIR/"

echo "----------------------------------------"
echo "✅ Website successfully synced to Documents!"
echo "📂 Location: $DEST_DIR"
echo "----------------------------------------"
