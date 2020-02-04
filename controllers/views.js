const Tour = require('./../models/Tour');

const catchAsync = require('./../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user photo'
  });

  res.status(200).render('tour', { title: tour.name, tour });
});

exports.getLogin = catchAsync(async (req, res, next) => {
  res.render('login', { title: 'Login' });
});
