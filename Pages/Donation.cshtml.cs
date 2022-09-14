using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AtlantHelpProjectTestVersion._1.Pages
{
    public class DonationModel : PageModel
    {
        private readonly ILogger<DonationModel> _logger;

        public DonationModel(ILogger<DonationModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
