const SMALL_LENGTH = 1;
const LARGE_LENGTH = 5;

const checkLengthRecursive = (pieces, l, r, sum, length) => {
    let canBuildFence = false;

    if (l > r) {
         return sum === length;
    }

    canBuildFence = checkLengthRecursive(pieces, l + 1, r, sum + pieces[l], length);
    if (canBuildFence) return true;

    canBuildFence = checkLengthRecursive(pieces, l + 1, r, sum, length);

    return canBuildFence;
}

const buildFence = (small, large, length) => {
    let fenceMaterials = [];

    if (small < 0 || large < 0 || length < 0) {
        return false;
    }
    if (small === 0 && large === 0) {
        return false;
    }

    for (let i = 0; i < small; i++) {
        fenceMaterials.push(SMALL_LENGTH);
    }

    for (let j = 0; j < large; j++) {
        fenceMaterials.push(LARGE_LENGTH);
    }

    let numMaterials = fenceMaterials.length;

    return checkLengthRecursive(fenceMaterials, 0, numMaterials - 1, 0, length);
}

module.exports = { buildFence };