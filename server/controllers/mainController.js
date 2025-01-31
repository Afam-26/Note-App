/**
 * GET /
 * Homepage
 * About
 */

exports.homepage = async (req, res) => {
    const locals = {
        title: "NodeJs note",
        description: "Free NodeJs Note app"
    }

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });

}

exports.about = async (req, res) => {
    const locals = {
        title: "About - NodeJs note",
        description: "Free NodeJs Note app"
    }

    res.render('about', locals);

}

