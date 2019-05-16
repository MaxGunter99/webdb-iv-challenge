const router = require('express').Router();
const Recipes = require('./recipe-module');


//RETRIEVE ALL RECIPIES
router.get("/", async (req, res) => {
    try {
      const recipes = await Recipes.find();
      res.status(200).json(recipes);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the Recipes" });
    }
});

//GET SPECIFIC RECIPIE
router.get('/:id', async (req, res) => {
    try {
        const recipes = await Recipes.findById( req.params.id );
        if (recipes) {
            res.status(200).json(recipes);
        } else {
            res.status(404).json({ message: 'We could not find the recipe' });
        }
    } catch (error) {
        res
            .status(500)
            .json({ message: 'We ran into an error retrieving the recipe' });
    }
});

//ADD A RECIPE
router.post('/', async (req, res) => {
    const recipe  = req.body;

    if (recipe.name, recipe.dish_id) {
        try {
            const inserted = await Recipes.add(recipe);
            res.status(201).json(inserted);
        } catch (error) {
            res.status(500).json({ message: 'We ran into an error creating the Dish' });
        }
    } else {
        res.status(400).json({ message: 'Please provide name of the Dish' });
    }
});

//UPDATE RECIPES
router.put('/:id', async (req, res) => {
    const changes = req.body;

    if (changes.name) {
        try {
            const updated = await Recipes.update(req.params.id, changes);
            if (updated) {
                res.status(200).json(updated);
            } else {
                res.status(404).json({ message: 'That Dish does not exist' });
            }
        } catch (error) {
            res.status(500).json({ message: 'We ran into an error updating the Dish' });
        }
    } else {
        res.status(400).json({ message: 'Please provide the name of the track' });
    }
});

//DELETE RECIPE
router.delete('/:id', async (req, res) => {
    try {
        const count = await Recipes.remove(req.params.id);
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