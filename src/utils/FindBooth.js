function FindBooth(boothlist, id) {
    for (var i = 0; i < boothlist.length; i++) {
        if (boothlist[i].id === parseInt(id)) {
            return boothlist[i];
        }
    }
    return null;
}

export default FindBooth;