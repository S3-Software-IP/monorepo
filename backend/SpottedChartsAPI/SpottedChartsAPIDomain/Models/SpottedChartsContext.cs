using Microsoft.EntityFrameworkCore;
using SpotifyAPI.Web;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace SpottedChartsAPIDomain.Models;

public partial class SpottedChartsContext : DbContext
{

    private readonly string _connectionString;
    public SpottedChartsContext(string connectionString)
    {
        _connectionString = connectionString;

    }

    public SpottedChartsContext(DbContextOptions<SpottedChartsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Snapshot> Snapshots { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySQL(_connectionString, ServerVersion.Parse("8.1.0-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Snapshot>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.HasIndex(e => e.UserId, "user_id");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("id");
            entity.Property(e => e.ArtistSnapshot)
                .HasColumnType("json")
                .HasColumnName("artist_snapshot");
            entity.Property(e => e.DateTaken)
                .HasColumnType("datetime")
                .HasColumnName("date_taken");
            entity.Property(e => e.GenreSnapshot)
                .HasColumnType("json")
                .HasColumnName("genre_snapshot");
            entity.Property(e => e.SongSnapshot)
                .HasColumnType("json")
                .HasColumnName("song_snapshot");
            entity.Property(e => e.UserId)
                .HasMaxLength(36)
                .HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.Snapshots)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("Snapshots_ibfk_1");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.Property(e => e.Id)
                .HasMaxLength(36)
                .HasColumnName("id");
            entity.Property(e => e.AuthToken)
                .HasMaxLength(265)
                .HasColumnName("auth_token");
            entity.Property(e => e.Email)
                .HasMaxLength(256)
                .HasColumnName("email");
            entity.Property(e => e.RefreshToken)
                .HasMaxLength(265)
                .HasColumnName("refresh_token");
            entity.Property(e => e.SpotifyUserId)
                .HasMaxLength(40)
                .HasColumnName("spotify_user_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}