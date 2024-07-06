const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// Display list of all BookInstances.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
    const allBookInstances = await BookInstance.find().populate("book").exec();

    res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: allBookInstances,
    })
});

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Book Instance detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book Instance create GET");
});

// Display BookInstance create on POST.
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book Instance create POST ");
});

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book Instance delete GET");
});

// Display BookInstance delete on POST.
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book Instance delete POST ");
});

// Display BookInstance update form on GET.
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book Instance update GET");
});

// Display BookInstance update on POST.
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book Instance update POST ");
});