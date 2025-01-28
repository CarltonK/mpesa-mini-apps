## XML - extensible Markup Language

Similar to XML only that we don't have tags that are set in stone E.g <p> <h1>
Tags can be anything you want or a convention that your org or you follows

<library>
    <book id=1>
        <title>Hacksaw</title>
        <author>Silver Team</author>
        <year>2024</year>
    </book>
</library>

{
    "book": {
        "id": 1,
        "title": "Hacksaw
        "author": "Silver Team
    }
}

## Syntax
<?xml version="1.0" encoding="UTF-8"?>

<root> is essential to include but not mandatory