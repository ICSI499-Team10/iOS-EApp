import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('eappIncidentsTable.db')

export const init = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            'CREATE TABLE IF NOT EXISTS incidents (incidentId INTEGER PRIMARY KEY NOT NULL, description TEXT NOT NULL, category TEXT NOT NULL, incidentTypeId INTEGER NOT NULL, source TEXT NOT NULL, title TEXT NOT NULL);', 
            [], 
            () => {
                resolve()
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const insertIncident = (incidentId, description, category, incidentTypeId, source, title) => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `INSERT INTO incidents (incidentId, description, category, incidentTypeId, source, title) VALUES (?, ?, ?, ?, ?, ?);`, 
            [incidentId, description, category, incidentTypeId, source, title], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchIncidents = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const deleteIncidents = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `DELETE FROM incidents;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchBeReady = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'BeReady';`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAlerts = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Alerts';`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAdvisory = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Advisory';`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAdvisoryFire = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 2;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAdvisoryHealth = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 5;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAdvisoryOther = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 6;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAdvisoryRoads = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 4;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAdvisoryWeather = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 1;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAlertsFire = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 2;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAlertsHealth = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 5;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAlertsOther = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 6;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAlertsRoads = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 4;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchAlertsWeather = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 1;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchBeReadyFire = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 2;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchBeReadyHealth = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 5;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchBeReadyOther = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 5;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchBeReadyRoads = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 4;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}

export const fetchBeReadyWeather = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 1;`, 
            [], 
            (_,result) => {
                resolve(result)
            }, 
            (_,err) => {
                reject(err)
            })
        })
    })
    return promise
}





