import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('eappIncidentsTable.db')

export const init = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            'CREATE TABLE IF NOT EXISTS incidents (incidentId INTEGER PRIMARY KEY NOT NULL, description TEXT NOT NULL, category TEXT NOT NULL, incidentTypeId INTEGER NOT NULL, source TEXT NOT NULL, title TEXT NOT NULL, timeOfEvent TEXT NOT NULL, severityTypeId INTEGER NOT NULL);', 
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

export const insertIncident = (incidentId, description, category, incidentTypeId, source, title, timeOfEvent, severityTypeId) => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `INSERT INTO incidents (incidentId, description, category, incidentTypeId, source, title, timeOfEvent, severityTypeId) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`, 
            [incidentId, description, category, incidentTypeId, source, title, timeOfEvent, severityTypeId], 
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
            `SELECT * FROM incidents ORDER BY timeOfEvent DESC;`, 
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
            `DROP TABLE IF EXISTS incidents;`, 
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
            `SELECT * FROM incidents WHERE category = 'BeReady' ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Alerts' ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Advisory' ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 2 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 5 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 6 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 4 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Advisory' AND incidentTypeId = 1 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 2 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 5 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 6 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 4 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'Alerts' AND incidentTypeId = 1 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 2 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 5 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 5 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 4 ORDER BY timeOfEvent DESC;`, 
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
            `SELECT * FROM incidents WHERE category = 'BeReady' AND incidentTypeId = 1 ORDER BY timeOfEvent DESC;`, 
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





