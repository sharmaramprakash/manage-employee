# About this project
1. Tech stack - Mongodb, handlebars, JavaScript, TypeScript, express, node
2. Create, edit, view, delete an employee
3. Database is persisted in mongodb
4. Find a few code snippet below about zen coding in editor

## how to run this project
1. npm init
2. npm install or npm update 
3. cd serer folder and ts-node mserver.ts
4. visit http://localhost:7000/api/employee/home

---

# About this Markdown

## what is Markdown?

see [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

---

## usage

1. Write markdown text in this textarea.
2. Click 'HTML Preview' button.

---

## markdown quick reference

## headers

_emphasis_

**strong**

- list

> block quote

    code (4 spaces indent) // Keep it out of block of any
    var x= 10;

[links](https://wikipedia.org)

---

## changelog

- 17-Feb-2013 re-design

---

## thanks

- [markdown-js](https://github.com/evilstreak/markdown-js)

## project related note

1.  convert field to string

        db.foo.find( { 'bad' : { $type : 1 } } )
        .forEach( function (x) {
        x.bad = new String(x.bad); // convert field to string
        db.foo.save(x);
        });

2.  convert field to int

        db.db-name.find({field-name: {$exists: true}}).forEach(function(obj) {
        obj.field-name = new NumberInt(obj.field-name);
        db.db-name.save(obj);
        });

3.  delete a filed if present

        {
                "_id" : ObjectId("5e37cebd38055a4bd1fcf4f0"),
                "name" : "book",
                "tags" : {
                        "words" : [
                                "abc",
                                "123"
                        ],
                        "lat" : 33,
                        "long" : 22
                }
        }


        db.test.update({}, { "$unset": {"tags.words" : ""}}) // To delete "words" in the document.

4.  add a new field if not present otherwise update it.

            db.test.update({}, { "$set": {"tags.paragraph" : 10}}) // To delete "words" in the document.

            {
            "_id" : ObjectId("5e37cebd38055a4bd1fcf4f0"),
            "name" : 0,
            "tags" : {
                    "long" : 22,
                    "words" : "",
                    "paragraph" : 10
            }

    }

5.  Few commands

        use <db> // if db not there, it creates.
        show <db>
        show tables/collections
        use <collection>
        db.<collection>.drop()
        db.createCollection(<name>)
        db.<collection>.find().pretty()

6.  Zen coding with is formely know as Emmet // Some abbreviations

        {{!-- ul#nav>li.class$*5>a --}}
        <ul id="nav">
            <li class="class1"><a href=""></a></li>
            <li class="class2"><a href=""></a></li>
            <li class="class3"><a href=""></a></li>
            <li class="class4"><a href=""></a></li>
            <li class="class5"><a href=""></a></li>
        </ul>
        {{!-- div#page>(div#header>ul#nav>li*4>a)+(div#page>(h1>span)+p*2)+div#footer --}}
        <div id="page">
            <div id="header">
                <ul id="nav">
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </div>
            <div id="page">
                <h1><span></span></h1>
                <p></p>
                <p></p>
            </div>
            <div id="footer"></div>
        </div>

7.  mongoDB shell command is case-sensitive

8.  see Export and Import in JavaScript (https://stackoverflow.com/questions/34741111/exporting-importing-json-object-in-es6/39414432)

        export default {
        STATES: {
        'AU' : {...},
        'US' : {...}
         }
        };

    to which you can import as:-
    
        import STATES from 'states'; or

        var STATES = {};
        STATES.AU = {...};
        STATES.US = {...};
        export STATES;
        
    to which you can import as:-

        import { STATES } from 'states';

Notice the difference between one that uses default and one that doesn't. With default you can export any javascript expression and during import you can use whatever identifier and it will be defaulted to that default expression. You could also have done

        import whatever from 'states';

and whatever would get the value of an object that we assigned to default.

In contrast, when you don't export default expression, export exports it as an part of object which is why you had to use

        import {STATES}

In this case you HAVE to use the right literal name for import to work or else import will not be able to understand what you're trying to import. Also, note that it's using object destructuring to import the right value.
