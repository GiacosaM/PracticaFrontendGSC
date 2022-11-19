using System.ComponentModel.DataAnnotations;

namespace BE_LoansApp.Models
{
    public class Thing
    {
        public int Id { get; set; }

        [Required(ErrorMessage = " El Nombre del Objeto es Obligatorios")]
        [MaxLength(25, ErrorMessage = "El nombre no puede exceder los 25 caracteres")]
        public string Description { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [Required]
        public Category Category { get; set; }

        [Required]
        public DateTime CreateDate { get; set; } = DateTime.UtcNow;




    }
}
