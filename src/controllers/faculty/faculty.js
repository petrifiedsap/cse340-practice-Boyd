import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js';

// Route handler for the faculty list page
const facultyListPage = async (req, res) => {
    const sort = req.query.sort || 'name';
    const faculty = await getSortedFaculty(sort);
console.log(sort);
    res.render('faculty/list', {
        title: 'Faculty List',
        faculty,
        currentSort: sort
    });
};

// Route handler for individual faculty detail pages
const facultyDetailPage = async (req, res, next) => {
    const facultySlug = req.params.facultySlug;
    const faculty = await getFacultyBySlug(facultySlug);
console.log(facultySlug)
console.log(faculty);
    // If course doesn't exist, create 404 error
    if (Object.keys(faculty).length === 0) {
        const err = new Error(`Faculty ${facultySlug} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: faculty.name,
        faculty: faculty
    });
};

export { facultyListPage, facultyDetailPage };
