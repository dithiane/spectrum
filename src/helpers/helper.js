module.exports = {
    isUndefined(obj) {
        if (typeof obj === "undefined") return true
        return false
    },

    getArrayForCurrentSlice(arr, current = 1, items = 10) {
        let start = (current - 1) * items
        let end = current * items
        if (end  > arr.length) end =  arr.length
        return arr.slice(start, end)
    },


    isLengthEqual(array1, array2){
      if (array1.length === array2.length) return true
      return false
    },

    searchString(arr, str) {
        str = str.trim().toLowerCase()
        let matchedItems = []

        matchedItems = arr.filter(function(item){
            if (item.name.toLowerCase().includes(str) || (item.city.toLowerCase().includes(str) || (item.genre.toLowerCase().includes(str))))
            return item
        })
        return matchedItems 
    },

    filter(arr, type, page) {
        if (!this.isUndefined(arr)) {
            if (arr.length != 0) {
                switch (type) {
                    case "name":
                        arr.sort((a, b) => a.name.localeCompare(b.name))
                        break
                    case "genre":
                        arr.sort((a, b) => a.genre.localeCompare(b.genre))
                        break
                    case "state":
                        arr.sort((a, b) => a.state.localeCompare(b.state))
                        break

                    default:
                        break;
                }
                arr = this.getArrayForCurrentSlice(arr, page)
            }

        }

        return arr
    }
}