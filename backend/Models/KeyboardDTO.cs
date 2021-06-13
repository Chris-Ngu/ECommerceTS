namespace backend.Models
{
    // DTO is exposed in API
    public class KeyboardDTO
    {
        public long id { get; set; }
        public string name { get; set; }
        public bool isSold { get; set; }
    }
}