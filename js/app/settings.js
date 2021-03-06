define([], function () {
    var o = window.localStorage.getItem('settings'),
        s = o ? JSON.parse(o) : [];

    return {
        shader_detail: s.shader_detail || 'lowp',
        anisotropy_level: s.anisotropy_level || 1,
        shadows: s.shadows || 0,
        antialiasing: s.antialiasing || 0,

        save: function () {

            window.localStorage.setItem('settings', JSON.stringify(this));
        }
    };
});