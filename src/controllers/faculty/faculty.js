import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

// Route handler for the course catalog list page
const facultyListPage = (req, res) => {
    const sort = req.query.sort || 'name';
    const faculty = getSortedFaculty(sort);

    res.render('faculty/list', {
        title: 'Faculty List',
        faculty,
        currentSort: sort
    });
};

// Route handler for individual course detail pages
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const faculty = getFacultyById(facultyId);

    // If course doesn't exist, create 404 error
    if (!faculty) {
        const err = new Error(`Faculty ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: faculty.name,
        faculty: faculty
    });
};

export { facultyListPage, facultyDetailPage };