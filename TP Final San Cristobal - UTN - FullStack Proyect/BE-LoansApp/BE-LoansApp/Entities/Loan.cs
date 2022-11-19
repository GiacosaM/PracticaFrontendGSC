using BE_LoansApp.Models;
using System.ComponentModel.DataAnnotations;

namespace BE_LoansApp.Entities
{
    public class Loan
    {
        public int Id { get; set; }

        public DateTime CreateDate { get; set; } = DateTime.UtcNow;

        public DateTime ReturnDate { get; set; }

        public string Status { get; set; }

        [Required]
        public int ThingId { get; set; }
        public Thing Thing { get; set; }

        [Required]
        public int PersonId { get; set; }
        public Person Person { get; set; }
    }
}
