/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const IndexEventsController = () => import('#events/controllers/index_events_controller')
const ShowEventController = () => import('#events/controllers/show_event_controller')
const StoreEventController = () => import('#events/controllers/store_event_controller')
const StoreTaskController = () => import('#tasks/controllers/store_tasks_controller')

router.get('/events', [IndexEventsController])
router.get('/event/:id', [ShowEventController])

router.post('/events/store', [StoreEventController])

router.post('/task/store', [StoreTaskController])

router.get('/stream', ({ inertia }) => {
  return inertia.render('stream')
})
