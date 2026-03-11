const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('pages/index', { page: 'beranda', title: 'Edelweiss Learning Center' });
});

app.get('/about/seputar', (req, res) => {
    res.render('pages/about', { page: 'tentang', title: 'Seputar ELC - Edelweiss Learning Center' });
});

app.get('/about/visi-misi', (req, res) => {
    res.render('pages/visi-misi', { page: 'tentang', title: 'Visi & Misi - Edelweiss Learning Center' });
});

app.get('/program/english-course', (req, res) => {
    res.render('pages/english-course', { page: 'program', title: 'English Course - Edelweiss Learning Center' });
});

app.get('/program/playetracy', (req, res) => {
    res.render('pages/playetracy', { page: 'program', title: 'Playetracy - Edelweiss Learning Center' });
});

app.get('/program/ipdc', (req, res) => {
    res.render('pages/ipdc', { page: 'program', title: 'IPDC - Edelweiss Learning Center' });
});

app.get('/kurikulum', (req, res) => {
    res.render('pages/kurikulum', { page: 'kurikulum', title: 'Kurikulum - Edelweiss Learning Center' });
});

app.get('/admission', (req, res) => {
    res.render('pages/admission', { page: 'admission', title: 'Pendaftaran - Edelweiss Learning Center' });
});

app.get('/artikel', (req, res) => {
    res.render('pages/artikel', { page: 'artikel', title: 'Artikel - Edelweiss Learning Center' });
});

app.get('/news', (req, res) => {
    res.render('pages/news', { page: 'artikel', title: 'News - Edelweiss Learning Center' });
});

app.get('/kontak', (req, res) => {
    res.render('pages/kontak', { page: 'kontak', title: 'Kontak - Edelweiss Learning Center' });
});

app.get('/galeri', (req, res) => {
    res.render('pages/galeri', { page: 'galeri', title: 'Galeri - Edelweiss Learning Center' });
});

app.listen(PORT, () => {
    console.log(`ELC Website running at http://localhost:${PORT}`);
});
