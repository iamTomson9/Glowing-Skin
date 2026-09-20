import { createContext, type PropsWithChildren, useContext, useMemo, useState } from 'react';

type RoutineKind = 'cleanser' | 'protect' | 'treatment';
type RoutineStep = { id: string; instruction: string; kind: RoutineKind; product: string; title: string };
type InventoryItem = { backstock: number; category: string; id: string; level: number; name: string; target: string; tint: string };
type ShoppingItem = { bought: boolean; id: string; name: string; price: number; priority: string; reason: string };

const routine: RoutineStep[] = [
  { id: 'cleanse', title: 'Gentle cleanse', instruction: 'Massage onto damp skin for 60 seconds, then rinse.', product: 'Simple Refreshing Facial Wash', kind: 'cleanser' },
  { id: 'moisturize', title: 'Lock in moisture', instruction: 'Apply a thin layer while your skin is still slightly damp.', product: 'CeraVe Daily Moisturizing Lotion', kind: 'treatment' },
  { id: 'protect', title: 'Protect with SPF', instruction: 'Apply evenly to face and exposed skin before going outside.', product: 'Nivea Sun Shine Control SPF 50', kind: 'protect' },
];
const inventory: InventoryItem[] = [
  { id: 'cleanser', name: 'Refreshing Facial Wash', category: 'Cleanser', target: 'Face', level: 68, backstock: 0, tint: '#DCEFE7' },
  { id: 'lotion', name: 'Daily Moisturizing Lotion', category: 'Moisturizer', target: 'Both', level: 42, backstock: 1, tint: '#F4E2D7' },
  { id: 'spf', name: 'Shine Control SPF 50', category: 'Sunscreen', target: 'Face', level: 22, backstock: 0, tint: '#F5E9A9' },
];
const initialShopping: ShoppingItem[] = [
  { id: 'spf', name: 'Sunscreen SPF 50', price: 150, priority: 'Essential', reason: 'Your current sunscreen is at 22% with no backup.', bought: false },
  { id: 'soap', name: 'Gentle body soap', price: 55, priority: 'Restock', reason: 'Expected to run out before your next shopping day.', bought: false },
  { id: 'serum', name: 'Hydrating serum', price: 130, priority: 'Optional', reason: 'Supports your hydration goal after essentials.', bought: false },
];

type AppState = { completedSteps: string[]; inventory: InventoryItem[]; routine: RoutineStep[]; shopping: ShoppingItem[]; toggleBought: (id: string) => void; toggleStep: (id: string) => void };
const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: PropsWithChildren) {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [shopping, setShopping] = useState(initialShopping);
  const value = useMemo<AppState>(() => ({ completedSteps, inventory, routine, shopping, toggleBought: (id) => setShopping((items) => items.map((item) => item.id === id ? { ...item, bought: !item.bought } : item)), toggleStep: (id) => setCompletedSteps((ids) => ids.includes(id) ? ids.filter((value) => value !== id) : [...ids, id]) }), [completedSteps, shopping]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
