const { Router } = require('express')
const {
    getMyDiaryPage,
    addNewDiary,
    getOneDiaryPageById,
    updateDiaryPage,
    updateDiary,
    deleteDiary,
    addCommentDiary
} = require('../controller/diary.controller')

const router = Router()

router.get('/my', getMyDiaryPage)
router.post('/add', addNewDiary)
router.get('/my/:id', getOneDiaryPageById)
router.get('/update/:id', updateDiaryPage)
router.post('/update/:id', updateDiary)
router.post('/delete/:id', deleteDiary)
router.post('/comment/:id', addCommentDiary)

module.exports = router