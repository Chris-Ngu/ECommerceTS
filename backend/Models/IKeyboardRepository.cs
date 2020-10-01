using System.Collections.Generic;

namespace KeebClack.Models
{
    public interface IKeyboardRepository
    {
        void Add (KeyboardModel keyboard);
        IEnumerable<KeyboardModel> GetAll();
        KeyboardModel Find(string key);
        KeyboardModel Remove(string key);
        void Update(KeyboardModel keyboard);
    }
}