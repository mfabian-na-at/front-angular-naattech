export const LOGIN = {
    TITLE: 'Fábrica de talento',
    DESCRIPTION: 'Inicia sesión con tu cuenta NAAT'
};

export const MENU ={
    WELCOME_TITLE: 'Hola,',
    DEFAULT_USER: 'Usuario',
    ITEMS:[
        {
            TITLE: 'Proyectos',
            PATH_PAGE: 'proyectos',
            ICON_ITEM: 'description'
        },
        {
            TITLE: 'Equipos de Trabajo',
            PATH_PAGE: 'equipos',
            ICON_ITEM: 'groups'
        },
        {
            TITLE: 'Actividades',
            PATH_PAGE: 'actividades',
            ICON_ITEM: 'list'
        },
        {
            TITLE: 'Noticias',
            PATH_PAGE: 'noticias',
            ICON_ITEM: 'newspaper'
        },
        {
            TITLE: 'Clientes',
            PATH_PAGE: 'clientes',
            ICON_ITEM: 'crop_free'
        },
        {
            TITLE: 'Usuarios',
            PATH_PAGE: 'usuarios',
            ICON_ITEM: 'account_circle'
        },
        {
            TITLE: 'Notificaciones',
            PATH_PAGE: 'notificaciones',
            ICON_ITEM: 'sms'
        }
    ]
};

export const PROJECTS = {
    TITLE: 'Proyectos',
    TABLE_HEADERS: [
        'Cliente','Proyecto','Horas invertidas','Detalle', 'Estatus', 'Acciones'
    ],
    SUBMENU: {
            TITLE_DETAIL: 'Detalle Proyecto',
            TITLE_ACTIVITY: 'Actividades',
            CLIENT: 'Cliente',
            PROJECT: 'Proyecto',
            TOTAL_HOURS: 'Horas totales',
            COLLABORATORS: 'Colaboradores'
        }
};

export const DIALOG_PROJECTS = {
    TITLE: 'Agregar proyecto',
    CLIENT: 'Cliente',
    PROJECT_NAME: 'Nombre del proyecto'
}

export const INPUTS = {
        SEARCH: 'Buscar',
        PROJECT: 'proyecto',
        NEWS: 'noticia',
        CLIENT: 'cliente',
        USER: 'usuario',
        NOTIFICATION: 'notificación',
        TEAM: 'equipo de trabajo',
        ACTIVITY: 'actividad'
};

export const BUTTONS = {
    ACTIONS_INACTIVE: 'Suspender',
    ACTIONS_ACTIVE: 'Activar',
    VIEW: 'Ver',
    ADD_PROJECT: 'proyecto',
    ADD_CLIENT: 'cliente',
    ADD_USER: 'usuario',
    ADD_NOTIFICATION: 'notificación',
    ADD_NEWS: 'noticia',
    ADD_TEAM: 'equipo de trabajo',
    ADD_ACTIVITY: 'actividad',
    ADD: 'Agregar',
    ADD_MORE: 'Aregar otro',
    OK: 'Ok',
};

export const STATUS = {
    ACTIVE: 'Activado',
    INACTIVE: 'Suspendido'
};


export const ERROR_MESSAGE = {
    PROJECTS_LIST_COMPLETE: 'Sólo se permite la carga de 5 proyectos a la vez',
    INPUT_INVALID_FORMAT: 'No se permite el uso de caracteres especiales.'
};

export const WORK_TEAM = {
    TITLE: 'Equipos de trabajo',
    TABLE_HEADERS: [
        'Área', 'Líder', 'Colaboradores', 'Actividades', 'Detalle'
    ],
}

export const USERS = {
    TITLE: 'Usuarios',
    OTHER: 'Otro'
}

export const CLIENTS = {
    TITLE: 'Clientes',
    OTHER: 'Otro'
}

export const NEWS = {
    TITLE: 'Noticias',
    TABLE_HEADERS: [
        'Noticia', 'Título', 'Autor', 'Fecha de publicación', 'Acciones'
    ],
    TABS: {
        ACITVE: 'Activas', 
        DRAFT: 'Borradores',
        SUSPENDED: 'Suspendidas'
    }
}

export const NOTIFICATIONS = {
    TITLE: 'Notificaciones',
    OTHER: 'Otro'
}

export const ACTIVITIES = {
    TITLE: 'Actividades',
    TABLE_HEADERS: [
        'Colaborador', 'Área', 'Proyecto en el mes', 'Horas en el mes', 'Detalle'
    ],
}
