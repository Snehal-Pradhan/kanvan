/**
 * Sidebar behaviour tests. We cover:
 *   - the Workspace nav renders its links
 *   - projects from the API are listed in the Projects section, with a count
 *   - an empty project list shows the "No projects yet" placeholder
 *   - the footer shows the last-synced clock
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const useProjectsMock = vi.fn();
vi.mock('../../hooks/useTasks', () => ({
  useProjects: () => useProjectsMock(),
}));

function setup(projects) {
  useProjectsMock.mockReturnValue({ data: { projects } });
  return render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );
}

const PROJECTS = [
  { id: 1, name: 'Payments' },
  { id: 2, name: 'Platform' },
];

describe('Sidebar', () => {
  it('renders the workspace navigation', () => {
    setup(PROJECTS);

    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /tasks/i })).toBeInTheDocument();
  });

  it('lists the projects returned by the API with a count', () => {
    setup(PROJECTS);

    expect(screen.getByRole('link', { name: /payments/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /platform/i })).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.queryByText(/no projects yet/i)).not.toBeInTheDocument();
  });

  it('shows a placeholder when there are no projects', () => {
    setup([]);

    expect(screen.getByText(/no projects yet/i)).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('shows the synced clock in the footer', () => {
    setup(PROJECTS);

    expect(screen.getByText(/synced/i)).toBeInTheDocument();
  });
});