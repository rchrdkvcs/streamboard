/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const DestroyTaskController = () => import('#tasks/controllers/destroy_task_controller')
import router from '@adonisjs/core/services/router'

const IndexGamemasterController = () =>
  import('#gamemaster/controllers/index_gamemaster_controller')
const ShowGamemasterController = () => import('#gamemaster/controllers/show_gamemaster_controller')
const StoreGamemasterController = () =>
  import('#gamemaster/controllers/store_gamemaster_controller')
const IndexStreamController = () => import('../app/stream/controllers/index_stream_controller.js')
const IndexEventsController = () => import('#events/controllers/index_events_controller')
const ShowEventController = () => import('#events/controllers/show_event_controller')
const StoreEventController = () => import('#events/controllers/store_event_controller')
const StoreTaskController = () => import('#tasks/controllers/store_tasks_controller')

// EVENTS ---------------------------------------------------------------------------------------------------

router.get('/events', [IndexEventsController])
router.get('/event/:id', [ShowEventController])

router.post('/events/store', [StoreEventController])

// GAME MASTER ----------------------------------------------------------------------------------------------

router.get('/gamemaster', [IndexGamemasterController])
router.get('/gamemaster/:id', [ShowGamemasterController])
router.post('/gamemaster/answer', [StoreGamemasterController])

// TASK -----------------------------------------------------------------------------------------------------

router.post('/task/store', [StoreTaskController])
router.delete('/task/destroy', [DestroyTaskController])

// STREAM ---------------------------------------------------------------------------------------------------

router.get('/stream/assets', [IndexStreamController])
