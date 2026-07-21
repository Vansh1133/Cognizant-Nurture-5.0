import styles from './CohortDetails.module.css';

const cohorts = [
  { name: 'Digital Engineering', trainer: 'Anita', status: 'ongoing', startDate: '2026-07-01', endDate: '2026-08-15' },
  { name: 'Cloud Foundations', trainer: 'Ravi', status: 'completed', startDate: '2026-05-10', endDate: '2026-06-20' },
  { name: 'React Essentials', trainer: 'Meera', status: 'ongoing', startDate: '2026-07-10', endDate: '2026-08-25' }
];

export default function CohortDetails() {
  return (
    <main className="dashboard">
      <h1>Cohort Dashboard</h1>
      <div className="cohort-grid">
        {cohorts.map((cohort) => (
          <section key={cohort.name} className={styles.box}>
            <h3 className={cohort.status === 'ongoing' ? styles.ongoing : styles.completed}>{cohort.name}</h3>
            <dl>
              <dt>Trainer</dt>
              <dd>{cohort.trainer}</dd>
              <dt>Status</dt>
              <dd>{cohort.status}</dd>
              <dt>Start Date</dt>
              <dd>{cohort.startDate}</dd>
              <dt>End Date</dt>
              <dd>{cohort.endDate}</dd>
            </dl>
          </section>
        ))}
      </div>
    </main>
  );
}