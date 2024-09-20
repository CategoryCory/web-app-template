using Microsoft.AspNetCore.Identity;
using WebAppBackendTemplate.Data;
using WebAppBackendTemplate.Data.Models;

namespace WebAppBackendTemplate.Extensions;

public static class IdentityServiceExtensions
{
    public static IServiceCollection ConfigureIdentity(this IServiceCollection services, IConfiguration config)
    {
        services.AddIdentity<ApplicationUser, IdentityRole>(options =>
        {
            options.User.RequireUniqueEmail = true;
        })
            .AddEntityFrameworkStores<AppDbContext>()
            .AddDefaultTokenProviders();

        return services;
    }
}