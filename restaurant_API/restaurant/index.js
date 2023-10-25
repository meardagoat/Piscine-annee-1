const express = require("express");
const app = express();
const mysql = require('mysql')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'root',
    database:'restaurant',
});


//All the functions for the items under this line


app.post('/items', (req, res) => {
    const item = req.body; // Assuming the "item" data is included in the request body

    connection.query('INSERT INTO item (name, description, price) VALUES(?, ?, ?)',[item.name, item.description, item.price], (err, results) => {
        if (err) throw err;

        // Optionally, you can send a success response or the newly created item back to the client
        res.json({ message: 'Item added successfully', item: results });
    });
});

app.get('/items', (req, res) => {
    console.log("Here is all the items")
    connection.query('SELECT * FROM item', (err, result) => {
        if (err) throw err;

        res.json(result);
    });
});

app.get('/items/:id', (req, res) => {
    const itemId = req.params.id;

    console.log("Here is the item with ID: " + itemId);

    connection.query('SELECT * FROM item WHERE id = ?', [itemId], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    });
});

app.delete('/items/:id', (req, res) => {
    const itemIdUrl = req.params.id;

    const sqlQuery = 'DELETE FROM item WHERE id = ?';

    connection.query(sqlQuery, [itemIdUrl], (err, results) => {
        if (err) throw err;

        if (results.affectedRows > 0) {
            res.json({ message: 'Item deleted successfully!', results });
        } else {
            res.json({ message: 'Item not found' });
        }
    });
});

app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;

    console.log("Updating the item with ID: " + itemId);

    // Retrieve the updated item details from the request body
    const updatedItem = req.body;

    connection.query('UPDATE item SET name = ?, description = ?, price = ? WHERE id = ?', [updatedItem.name, updatedItem.description, updatedItem.price, itemId], (err, result) => {
        if (err) throw err;

        if (result.affectedRows > 0) {
            res.json({ message: 'Item updated successfully!' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    });
});



//All the functions for the categories under this line


app.post('/categories', (req, res) => {
    const category = req.body; // Assuming the "category" data is included in the request body

    connection.query('INSERT INTO category (name) VALUES(?)',[category.name], (err, results) => {
        if (err) throw err;

        // Optionally, you can send a success response or the newly created category back to the client
        res.json({ message: 'category added successfully', category: results });
    });
});

app.get('/categories', (req, res) => {
    console.log("Here is all the categories")
    connection.query('SELECT * FROM category', (err, result) => {
        if (err) throw err;

        res.json(result);
    });
});

app.get('/categories/:id', (req, res) => {
    const categoryId = req.params.id;

    console.log("Here is the categories with ID: " + categoryId);

    connection.query('SELECT * FROM category WHERE id = ?', [categoryId], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'category not found' });
        }
    });
});

app.delete('/categories/:id', (req, res) => {
    const categoryIdUrl = req.params.id;

    const sqlQuery = 'DELETE FROM category WHERE id = ?';

    connection.query(sqlQuery, [categoryIdUrl], (err, results) => {
        if (err) throw err;

        if (results.affectedRows > 0) {
            res.json({ message: 'Category deleted successfully!', results });
        } else {
            res.json({ message: 'Category not found' });
        }
    });
});

app.put('/categories/:id', (req, res) => {
    const categoryId = req.params.id;

    console.log("Updating the category with ID: " + categoryId);

    // Retrieve the updated category details from the request body
    const updatedcategory = req.body;

    if (updatedcategory.name) {
        connection.query('UPDATE category SET name = ? WHERE id = ?', [updatedcategory.name, categoryId], (err, result) => {
            if (err) throw err;

            if (result.affectedRows > 0) {
                res.json({ message: 'Category updated successfully!' });
            } else {
                res.status(404).json({ message: 'Category not found' });
            }
        });
    } else {
        res.status(400).json({ message: 'Invalid request body' });
    }
});


//All the functions for the formulas under this line

app.post('/formulas', (req, res) => {
    const formula = req.body; // Assuming the "formula" data is included in the request body

    connection.query('INSERT INTO formula (name, description, price) VALUES(?, ?, ?)',[formula.name, formula.description, formula.price], (err, results) => {
        if (err) throw err;

        // Optionally, you can send a success response or the newly created formula back to the client
        res.json({ message: 'Formula added successfully', formula: results });
    });
});

app.get('/formulas', (req, res) => {
    console.log("Here is all the formulas")
    connection.query('SELECT * FROM formula', (err, result) => {
        if (err) throw err;

        res.json(result);
    });
});

app.get('/formulas/:id', (req, res) => {
    const formulaId = req.params.id;

    console.log("Here is the formulas with ID: " + formulaId);

    connection.query('SELECT * FROM formula WHERE id = ?', [formulaId], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'formula not found' });
        }
    });
});

app.delete('/formulas/:id', (req, res) => {
    const formulaIdUrl = req.params.id;

    const sqlQuery = 'DELETE FROM formula WHERE id = ?';

    connection.query(sqlQuery, [formulaIdUrl], (err, results) => {
        if (err) throw err;

        if (results.affectedRows > 0) {
            res.json({ message: 'formula deleted successfully!', results });
        } else {
            res.json({ message: 'formula not found' });
        }
    });
});

app.put('/formulas/:id', (req, res) => {
    const formulaId = req.params.id;

    console.log("Updating the formula with ID: " + formulaId);

    // Retrieve the updated formula details from the request body
    const updatedFormula = req.body;

    if (updatedFormula.name && updatedFormula.description && updatedFormula.price) {
        connection.query('UPDATE formula SET name = ?, description = ?, price = ? WHERE id = ?', [updatedFormula.name, updatedFormula.description, updatedFormula.price, formulaId], (err, result) => {
            if (err) throw err;

            if (result.affectedRows > 0) {
                res.json({ message: 'Formula updated successfully!' });
            } else {
                res.status(404).json({ message: 'Formula not found' });
            }
        });
    } else {
        res.status(400).json({ message: 'Invalid request body' });
    }
});


connection.connect()

app.listen(3000, () => console.log("Server is running"));

