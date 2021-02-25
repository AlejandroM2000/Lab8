const formatVolumeIconPath = require('../assets/scripts/main');
describe('Icon path', () => {
    test('Vol greater then 66', () => {
      expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('Vol between 66 and 34', () => {
        expect(formatVolumeIconPath(66)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('Vol between 33 and 1', () => {
        expect(formatVolumeIconPath(33)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('Vol is 0', () => {
        expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
});