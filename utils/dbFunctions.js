import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('eappIncidents.db')

export const init = () => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            'CREATE TABLE IF NOT EXISTS incidents (incidentID INTEGER PRIMARY KEY NOT NULL, description TEXT NOT NULL);', 
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

export const insertIncident = (description) => { 
    const promise = new Promise((resolve, reject) => { 
        db.transaction((tx) => { 
            tx.executeSql(
            `INSERT INTO incidents (description) VALUES (?);`, 
            [description], 
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
