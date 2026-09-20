alter function public.handle_updated_at() set search_path = '';

alter function public.decrement_product_usage(uuid, text) security invoker;
revoke execute on function public.decrement_product_usage(uuid, text) from public, anon;
grant execute on function public.decrement_product_usage(uuid, text) to authenticated;

alter function public.set_product_level(uuid, integer) security invoker;
revoke execute on function public.set_product_level(uuid, integer) from public, anon;
grant execute on function public.set_product_level(uuid, integer) to authenticated;
