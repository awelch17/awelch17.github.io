import os
import json
import copy

from jinja2 import Template
import markdown


def load_source(path):
    with open(path) as f:
        return f.read()


def load_all_sources():
    sources = {}
    
    for file_name in os.listdir(os.path.join(os.getcwd(), "sources")):
        sources[file_name[:-3]] = load_source(os.path.join(os.getcwd(), "sources", file_name))
    
    return sources


def create_directory_file(sources):
    lookup = []
    
    for source in sources:
        lookup.append({"name": source.replace("-", " ").title(), "location": source + ".html"})
    
    with open(os.path.join(os.getcwd(), "directory.js"), "w") as f:
        f.write("var sources = " + json.dumps(lookup))


def create_page(template_text, source_name, source):
    template = Template(template_text)
    
    content = markdown.markdown(source, extensions=["extra"])
    
    rendered_template = template.render(content=content)
    
    with open(os.path.join(os.getcwd(), "pages", source_name + ".html"), "w") as f:
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
        create_page(template_text, source, sources[source])