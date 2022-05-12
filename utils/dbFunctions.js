import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('eappIncidentsTable.db')

/**
 * Creates main table for all information to be put into local database.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Inserts all information into table saved into the local database.
 * @param {*} incidentId The incident's ID
 * @param {*} description The incident's description
 * @param {*} category The incident's category (Advisory, Alert, or Be Ready)
 * @param {*} incidentTypeId The incident's subcategory (1-6)
 * @param {*} source The incident's source
 * @param {*} title The title of the incident
 * @param {*} timeOfEvent The time of the incident
 * @param {*} severityTypeId How severe the incident is
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the information from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Drops the table from the local database if it exists already.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Be Ready" information from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Alerts" information from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Advisory" information from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Advisory" information for "Fire" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Advisory" information for "Health" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Advisory" information for "Other" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Advisory" information for "Roads" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Advisory" information for "Weather" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Alerts" information for "Fire" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Alerts" information for "Health" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Alerts" information for "Other" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Alerts" information for "Roads" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Alerts" information for "Weather" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Be Ready" information for "Fire" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Be Ready" information for "Health" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Be Ready" information for "Other" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Be Ready" information for "Roads" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

/**
 * Retrieves all the "Be Ready" information for "Weather" from the local database ordered by timeOfEvent.
 * @returns Promise; if resolved or rejected
 */
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

export const getDBMostRecentIncident = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `SELECT * FROM incidents ORDER BY timeOfEvent DESC LIMIT 1;`, 
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
