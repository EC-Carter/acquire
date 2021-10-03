

export const alpha = (targets) => {
    return [...targets.sort((a,b) => {
            let aName = a.info.companyName.toLowerCase();
            let bName = b.info.companyName.toLowerCase();
            if(aName < bName){
                return -1;
            }
            if(aName > bName){
                return 1;
            }
            return 0;
        })
]
}

export const revAlpha = (targets) => {
    return [...targets.sort((a,b) => {
            let aName = a.info.companyName.toLowerCase();
            let bName = b.info.companyName.toLowerCase();
            if(aName < bName){
                return 1;
            }
            if(aName > bName){
                return -1;
            }
            return 0;
        })
    ]
}

export const status = (targets,status) => {

    return targets.filter((target) => target.status === status)

}

 export const search = (targets,string) => {
    return targets.filter(target => {
        return target.info.companyName.toLowerCase().includes(string.toLowerCase())
    })
}