import { aktu, chat_app, chess, giphy, google_calendar, round_robin, semantic_segmentation, tetris, weather } from "../Constant/projectDetail"

const useProjectData = (slug) => {
    if (slug === 'semantic_segmentation') return semantic_segmentation
    if (slug === 'chat_app') return chat_app
    if (slug === 'google_calendar') return google_calendar
    if (slug === 'chess') return chess
    if (slug === 'round_robin') return round_robin
    if (slug === 'giphy') return giphy
    if (slug === 'tetris') return tetris
    if (slug === 'aktu_mania') return aktu
    if (slug === 'weather') return weather
}

export default useProjectData