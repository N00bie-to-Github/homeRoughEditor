// Constants
var IMPERIAL = 1;
var METRIC = 2;

var Settings = {
    unitSystem: IMPERIAL,
    imperial:  {
        decimalPlaces: 3,
        fraction: 16
    },
    config: {
        meter: 100,
        gridSize: 10
    },
    wall: {
        // Minimum thickness in cm
        min: 7,
        // Maximum thickness in cm
        max: 50.8,
        // The default thickeness
        width: 11.43
    },
    door: {
        default: 76.2
    },
    language: {
        MODE_SELECTION_TEXT: 'Mode Selection',
        LABEL_BOX_TEXT: 'Your Text',
        MODIFY_WALL_TEXT: 'Modify the wall',
        CUT_WALL_TEXT: 'Cut a wall',
        WALL_CUT_WARNING: 'Warning: Cutting a wall can result in loss of configuration',
        ADD_DOOR_TEXT: 'Add a door',
        ADD_WINDOW_TEXT: 'Add a window',
        ADD_STAIRS_TEXT: 'Add stairs',
        ADD_OBJECT_TEXT: 'Add an object',
        ROOM_CONFIG_TEXT: 'Room configuration',
        ADD_WALL_TEXT: 'Add wall(s)',
        ADD_PARTITION_TEXT: 'Add partition(s)'
    }
};



// TODO:
// Add rotation of objects
// Add tub, sink, shower, etc
