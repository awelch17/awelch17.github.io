# Reiss-Notes Specification

## General Specification

A list of sources in sources/ gets compiled by compile.py into a large number of html files under sources/, and a directory in directory.js which is directly loaded and used to navigate the sources. Directory.js therefore has to contain source name, author, category, tags, and the location of the corresponding html file.

## Source Specification

JSON

```json
{
    "name": name,
    "author": author,
    "categories": primary/secondary, record/commentary,
    "tags": [tags],
    "notes": notes,
    "content": [
        [<paragraph>, <commentary>],
        [<paragraph>, <commentary>]
    ]
}
```

## Directory Specification

JSON

```json
{
    "name": name,
    "author": author,
    "categories": primary/secondary, record/commentary,
    "tags": [tags],
    "location": "pages/<location>"
}
```
