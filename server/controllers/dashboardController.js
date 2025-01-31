/**
 * GET /
 * Dashboard
 */

exports.dashboard = async (req, res) => {
    const locals = {
        title: "Dashboard",
        description: "Free NodeJs Note app"
    }

    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
    });

}