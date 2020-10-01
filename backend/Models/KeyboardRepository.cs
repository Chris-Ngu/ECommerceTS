using System;
using System.Collections.Generic;
using System.Collections.Concurrent;

namespace KeebClack.Models
{
    public class KeyboardRepository : IKeyboardRepository
    {
        private static ConcurrentDictionary<string, KeyboardModel> _keyboards = new ConcurrentDictionary<string, KeyboardModel>();

        public KeyboardRepository()
        {
            Add(new KeyboardModel { Name = "keyboard 1" });
        }

        public IEnumerable<KeyboardModel> GetAll()
        {
            return _keyboards.Values;
        }

        public void Add(KeyboardModel keyboard)
        {
            keyboard.id = Guid.NewGuid().ToString();
            _keyboards[keyboard.id] = keyboard;
        }

        public KeyboardModel Find(string key)
        {
            KeyboardModel keyboard;
            _keyboards.TryGetValue(key, out keyboard);
            return keyboard;
        }

        public KeyboardModel Remove(string key)
        {
            KeyboardModel keyboard;
            _keyboards.TryGetValue(key, out keyboard);
            _keyboards.TryRemove(key, out keyboard);
            return keyboard;
        }

        public void Update(KeyboardModel keyboard)
        {
            _keyboards[keyboard.id] = keyboard;
        }
    }
}