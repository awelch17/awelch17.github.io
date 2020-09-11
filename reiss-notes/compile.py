import os
import json
import copy

from jinja2 import Template


def load_source(path):
    with open(path) as f:
        return json.load(f)


def load_all_sources():
    sources = []
    
    for file_name in os.listdir(os.path.join(os.getcwd(), "sources")):
        sources.append(load_source(os.path.join(os.getcwd(), "sources", file_name)))
    
    return sources


def create_file_name(source):
    file_name = source["date"] + "-" + source["author"].lower() + "-" + source["short_name"].lower() + ".html"
    
    return file_name.replace(" ", "-")


def create_directory_file(sources):
    data = copy.deepcopy(sources)
    
    for source in data:
        source["location"] = create_file_name(source)
        source.pop("short_name", None)
        source.pop("date", None)
        source.pop("notes", None)
        source.pop("content", None)
    
    with open(os.path.join(os.getcwd(), "directory.js"), "w") as f:
        f.write("var sources = " + json.dumps(data))


def create_page(template_text, source):
    template = Template(template_text)
    
    categories_str = ""
    
    if(len(source["categories"]) > 0):
        for category in source["categories"]:
            tmp = category + ", "
            categories_str += tmp
        
        categories_str = categories_str[:-2]
        
    tags_str = ""
    
    if(len(source["tags"]) > 0):
        for tag in source["tags"]:
            tmp = tag + ", "
            tags_str += tmp
        
        tags_str = tags_str[:-2]
    
    raw_text = ""
    
    for para in source["content"]:
        raw_text += "&emsp;"
        raw_text += para[0]
        raw_text += "<br>"
    
    rendered_template = template.render(source=source, categories=categories_str, tags=tags_str, raw_text=raw_text)
    
    with open(os.path.join(os.getcwd(), "pages", create_file_name(source)), "w") as f:
        f.write(rendered_template)


if(__name__ == "__main__"):
    template_text = ""
    
    with open(os.path.join(os.getcwd(), "template.html")) as f:
        template_text = f.read()
    
    sources = load_all_sources()
    create_directory_file(sources)
    
    for file_name in os.listdir(os.path.join(os.getcwd(), "pages")):
        os.remove(os.path.join(os.getcwd(), "pages", file_name))
    
    for source in sources:
        create_page(template_text, source)