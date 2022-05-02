function hbsHelpers(hbs) {
    return hbs.create({
        helpers: {
            select: function (selected, option) {
                return (selected == option) ? 'selected="selected"' : '';
            }
        }
    });
}
module.exports = hbsHelpers;