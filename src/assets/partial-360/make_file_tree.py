import os
import json

def create_file_tree_json(root_dir):
    file_tree = {}
    for root, dirs, files in os.walk(root_dir):
        current_dir = os.path.relpath(root, root_dir)
        file_tree[current_dir] = {
            "type": "directory",
            "contents": []
        }
        for file in files:
            file_tree[current_dir]["contents"].append(file)
    return file_tree

def save_file_tree_json(file_tree, output_file):
    with open(output_file, 'w') as f:
        json.dump(file_tree, f, indent=4)

# Example usage:
root_directory = "./"
output_json_file = "file_tree.json"

file_tree = create_file_tree_json(root_directory)
save_file_tree_json(file_tree, output_json_file)