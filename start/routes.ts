/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PatchTaskController = () => import('#tasks/controllers/patch_task_controller')
import router from '@adonisjs/core/services/router'

const DestroyTaskController = () => import('#tasks/controllers/destroy_task_controller')
const DestroyEventController = () => import('#events/controllers/destroy_event_controller')
const PutGamemasterController = () => import('#gamemaster/controllers/put_gamemaster_controller')
const IndexGamemasterController = () =>
  import('#gamemaster/controllers/index_gamemaster_controller')
const ShowGamemasterController = () => import('#gamemaster/controllers/show_gamemaster_controller')
const IndexStreamController = () => import('../app/stream/controllers/index_stream_controller.js')
const IndexEventsController = () => import('#events/controllers/index_events_controller')
const ShowEventController = () => import('#events/controllers/show_event_controller')
const StoreEventController = () => import('#events/controllers/store_event_controller')
const StoreTaskController = () => import('#tasks/controllers/store_tasks_controller')

router.get('/', async ({ response }) => {
  response.redirect('/events')
})

// EVENTS ---------------------------------------------------------------------------------------------------

router.get('/events', [IndexEventsController])
router.get('/event/:id', [ShowEventController])
router.post('/event/store', [StoreEventController])
router.delete('/event/destroy', [DestroyEventController])

// GAME MASTER ----------------------------------------------------------------------------------------------

router.get('/gm', [IndexGamemasterController])
router.get('/gm/:id', [ShowGamemasterController])
router.put('/gm/answer-visibility', [PutGamemasterController])

// TASK -----------------------------------------------------------------------------------------------------

router.post('/task/store', [StoreTaskController])
router.delete('/task/destroy', [DestroyTaskController])
router.patch('/task/reorder', [PatchTaskController])

// STREAM ---------------------------------------------------------------------------------------------------

router.get('/stream/assets', [IndexStreamController])
