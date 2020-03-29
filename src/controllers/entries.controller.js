import { getConnection } from '../database';
import { v4 } from 'uuid';

const renderIndex = (req, res) => {
    const entries = getConnection().get('entries').value();
    res.render('index', {entries});
};

const renderNewEntry = (req, res) => {
    res.render('new-entry');
};

const createNewEntry = async (req, res) => {
    const { title, body } = req.body;
    const newEntry = {
        id: v4(),
        title,
        body,
        published: new Date()
    };
    await getConnection().get('entries').push(newEntry).write();
    res.redirect('/');
};

const renderUpdateEntry = async (req, res) => {
    const entry = await getConnection().get('entries').find({id: req.params.id}).value();
    res.render('update-entry', {entry});
}

const updateEntry = async (req, res) => {
    req.body.updatePublished = new Date();
    await getConnection().get('entries').find({id: req.params.id}).assign(req.body).write();
    res.redirect('/');
};

const deleteEntry = async (req, res) => {
    await getConnection().get('entries').remove({id: req.params.id}).write();
    res.redirect('/');
};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    renderUpdateEntry,
    updateEntry,
    deleteEntry
}