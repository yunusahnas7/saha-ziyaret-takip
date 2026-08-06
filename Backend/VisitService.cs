using System;

// Merkez onayı için gerekli enum
public enum VisitStatus { Pending, Approved, Rejected }

// Users tablosu tasarımı
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}

// Visits tablosu tasarımı
public class Visit
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string CustomerName { get; set; }
    public DateTime VisitDate { get; set; }
    public string Note { get; set; }
    public DateTime CreatedDate { get; set; }
    public VisitStatus Status { get; set; } 
}

public class VisitService
{
    public void CreateVisit(Visit visit)
    {
        // Geçmiş tarihli ziyaret oluşturulamaz
        if (visit.VisitDate < DateTime.Now.Date)
            throw new ArgumentException("Geçmiş tarihli ziyaret oluşturulamaz.");

        // CustomerName boş bırakılamaz
        if (string.IsNullOrWhiteSpace(visit.CustomerName))
            throw new ArgumentException("Müşteri adı boş bırakılamaz.");

        // Note alanı en fazla 500 karakter olabilir
        if (!string.IsNullOrEmpty(visit.Note) && visit.Note.Length > 500)
            throw new ArgumentException("Not alanı 500 karakterden uzun olamaz.");

        visit.CreatedDate = DateTime.UtcNow;
        visit.Status = VisitStatus.Pending; 
    }

    public void UpdateVisit(Visit existingVisit, Visit updatedVisit)
    {
        // Onaylanan ziyaretler kilitlenmelidir
        if (existingVisit.Status == VisitStatus.Approved)
            throw new InvalidOperationException("Onaylanmış ziyaretler üzerinde değişiklik yapılamaz.");
    }
}
