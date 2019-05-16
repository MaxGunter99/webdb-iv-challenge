const router = require('express').Router();
const Dishes = require('./dishes-module');

//GET ALL DISHES
router.get('/', async (req, res) => {
    try {
        const dishes = await Dishes.find();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ message: 'Server error getting all Dishes' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dish = await Dishes.findById(req.params.id);
        if (dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: 'Could not find the Dish' });
        }
    } catch (error) {
        res
            .status(500)
            .json({ message: 'We ran into an error retrieving the Dish' });
    }
});

router.post('/', async (req, res) => {
    const dish = req.body;

    if (dish.name) {
        try {
            const inserted = await Dishes.add(dish);
            res.status(201).json(inserted);
        } catch (error) {
            res.status(500).json({ message: 'We ran into an error creating the Dish' });
        }
    } else {
        res.status(400).json({ message: 'Please provide name of the Dish' });
    }
});

router.put('/:id', async (req, res) => {
    const changes = req.body;

    if (changes.name) {
        try {
            const updated = await Dishes.update(req.params.id, changes);
            if (updated) {
                res.status(200).json(updated);
            } else {
                res.status(404).json({
                    message: 'That Dish does not exist',
                });
            }
        } catch (error) {
            res.status(500).json({ message: 'We ran into an error updating the Dish' });
        }
    } else {
        res.status(400).json({ message: 'Please provide the name of the track' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await Dishes.remove(req.params.id);
        if (count > 0) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'That Dish does not exist, perhaps it was deleted already' });
        }
    } catch (error) {
        res.status(500).json({ message: 'We ran into an error removing the Dish' });
    }
});

module.exports = router;