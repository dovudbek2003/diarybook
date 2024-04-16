const db = require('../model/index.model')

const Diary = db.diary
const Comment = db.comment

// Route     GET /diary/my
const getMyDiaryPage = async (req, res) => {
    try {
        const data = await Diary.findAll({
            raw: true
        })

        res.render('diary/my-diary', {
            title: 'My Diary',
            diaries: data.reverse()
        })
    } catch (error) {
        console.log(error);
    }
}

// Route     POST /diary/add
const addNewDiary = async (req, res) => {
    try {
        const body = req.body
        await Diary.create({ text: body.text, imageUrl: body.imageUrl })
        res.redirect('/diary/my')
    } catch (error) {
        console.log(error);
    }
}

// Route     /diary/my/:id
// Method    GET
const getOneDiaryPageById = async (req, res) => {
    try {
        const id = req.params.id
        const diary = await Diary.findByPk(id, {
            raw: false,
            plain: true,
            include: ['comment'],
            nest: true
        })

        res.render('diary/one-diary', {
            title: 'One diary',
            diary: diary.toJSON(),
            comments: diary.toJSON().comment.reverse()
        })
    } catch (error) {
        console.log(error)
    }
}

// Route     /diary/update/:id
// Method    GET
const updateDiaryPage = async (req, res) => {
    try {
        const id = req.params.id;
        const diary = await Diary.findByPk(id, { raw: true })

        res.render('diary/update-diary', {
            title: 'Update diary',
            diary
        })
    } catch (error) {
        console.log(error)
    }
}

// Route     /diary/update/:id
// Method    POST
const updateDiary = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        await Diary.update({ text: body.text }, {
            where: { id },
            raw: true
        });

        res.redirect('/diary/my')
    } catch (error) {
        console.log(error)
    }
}

// Route    /diary/delete/:id
// Method   POST
const deleteDiary = async (req, res) => {
    try {
        const id = req.params.id;

        await Diary.destroy({
            where: {
                id
            }
        })

        res.redirect('/diary/my')
    } catch (error) {
        console.log(error)
    }
}

// Route     /diary/comment/:id
// Method    POST
const addCommentDiary = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        await Comment.create({ name: 'username', comment: body.comment, diaryId: id })
        res.redirect(`/diary/my/${id}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getMyDiaryPage,
    addNewDiary,
    getOneDiaryPageById,
    updateDiaryPage,
    updateDiary,
    deleteDiary,
    addCommentDiary
}