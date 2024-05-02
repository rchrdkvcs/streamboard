/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

// const DashboardController = () => import('#controllers/dashboard_controller')
// const StreamController = () => import('#controllers/stream_controller')
// const StoreEventController = () => import('#controllers/dashboard/store_event_controller')
// const StoreQstController = () => import('#controllers/dashboard/store_question_controller')
const IndexEventsController = () => import('#events/controllers/index_events_controller')
const ShowEventController = () => import('#events/controllers/show_event_controller')
const StoreEventController = () => import('#events/controllers/store_event_controller')
const StoreTaskController = () => import('#tasks/controllers/store_tasks_controller')
import router from '@adonisjs/core/services/router'

// const HomeController = () => import('#controllers/home_controller')

// router.get('/', [HomeController, 'show'])

// router.get('/stream-assets', [StreamController, 'index'])

// router.get('/dashboard', [DashboardController, 'index'])
// router.get('/dashboard/:id/question', [DashboardController, 'question'])
// router.get('/dashboard/:id/game', [DashboardController, 'game'])

// router.post('/store-event', [StoreEventController, 'execute'])
// router.post('/store-qst', [StoreQstController, 'execute'])

router.get('/events', [IndexEventsController])
router.get('/event/:id', [ShowEventController])
router.post('/events/store', [StoreEventController])
router.post('/task/store', [StoreTaskController])
