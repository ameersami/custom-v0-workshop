import * as UIComponents from './index';

/**
 * Maps component names to their corresponding shadcn/ui components
 * @param componentName - The name of the component to retrieve
 * @returns The component if found, undefined otherwise
 */
export function getComponent(componentName: string): React.ComponentType<any> | undefined {
  const componentMap: Record<string, React.ComponentType<any>> = {
    // Accordion
    'Accordion': UIComponents.Accordion,
    'AccordionItem': UIComponents.AccordionItem,
    'AccordionTrigger': UIComponents.AccordionTrigger,
    'AccordionContent': UIComponents.AccordionContent,
    
    // Alert Dialog
    'AlertDialog': UIComponents.AlertDialog,
    'AlertDialogPortal': UIComponents.AlertDialogPortal,
    'AlertDialogOverlay': UIComponents.AlertDialogOverlay,
    'AlertDialogTrigger': UIComponents.AlertDialogTrigger,
    'AlertDialogContent': UIComponents.AlertDialogContent,
    'AlertDialogHeader': UIComponents.AlertDialogHeader,
    'AlertDialogFooter': UIComponents.AlertDialogFooter,
    'AlertDialogTitle': UIComponents.AlertDialogTitle,
    'AlertDialogDescription': UIComponents.AlertDialogDescription,
    'AlertDialogAction': UIComponents.AlertDialogAction,
    'AlertDialogCancel': UIComponents.AlertDialogCancel,
    
    // Alert
    'Alert': UIComponents.Alert,
    'AlertTitle': UIComponents.AlertTitle,
    'AlertDescription': UIComponents.AlertDescription,
    
    // Aspect Ratio
    'AspectRatio': UIComponents.AspectRatio,
    
    // Avatar
    'Avatar': UIComponents.Avatar,
    'AvatarImage': UIComponents.AvatarImage,
    'AvatarFallback': UIComponents.AvatarFallback,
    
    // Badge
    'Badge': UIComponents.Badge,
    
    // Breadcrumb
    'Breadcrumb': UIComponents.Breadcrumb,
    'BreadcrumbList': UIComponents.BreadcrumbList,
    'BreadcrumbItem': UIComponents.BreadcrumbItem,
    'BreadcrumbLink': UIComponents.BreadcrumbLink,
    'BreadcrumbPage': UIComponents.BreadcrumbPage,
    'BreadcrumbSeparator': UIComponents.BreadcrumbSeparator,
    'BreadcrumbEllipsis': UIComponents.BreadcrumbEllipsis,
    
    // Button
    'Button': UIComponents.Button,
    
    // Calendar
    'Calendar': UIComponents.Calendar,
    'CalendarDayButton': UIComponents.CalendarDayButton,
    
    // Card
    'Card': UIComponents.Card,
    'CardHeader': UIComponents.CardHeader,
    'CardFooter': UIComponents.CardFooter,
    'CardTitle': UIComponents.CardTitle,
    'CardAction': UIComponents.CardAction,
    'CardDescription': UIComponents.CardDescription,
    'CardContent': UIComponents.CardContent,
    
    // Carousel
    'Carousel': UIComponents.Carousel,
    'CarouselContent': UIComponents.CarouselContent,
    'CarouselItem': UIComponents.CarouselItem,
    'CarouselPrevious': UIComponents.CarouselPrevious,
    'CarouselNext': UIComponents.CarouselNext,
    
    // Chart
    'ChartContainer': UIComponents.ChartContainer,
    'ChartTooltipContent': UIComponents.ChartTooltipContent,
    'ChartLegend': UIComponents.ChartLegend,
    'ChartLegendContent': UIComponents.ChartLegendContent,
    'ChartStyle': UIComponents.ChartStyle,
    
    // Checkbox
    'Checkbox': UIComponents.Checkbox,
    
    // Collapsible
    'Collapsible': UIComponents.Collapsible,
    'CollapsibleTrigger': UIComponents.CollapsibleTrigger,
    'CollapsibleContent': UIComponents.CollapsibleContent,
    
    // Command
    'Command': UIComponents.Command,
    'CommandDialog': UIComponents.CommandDialog,
    'CommandInput': UIComponents.CommandInput,
    'CommandList': UIComponents.CommandList,
    'CommandEmpty': UIComponents.CommandEmpty,
    'CommandGroup': UIComponents.CommandGroup,
    'CommandItem': UIComponents.CommandItem,
    'CommandShortcut': UIComponents.CommandShortcut,
    'CommandSeparator': UIComponents.CommandSeparator,
    
    // Context Menu
    'ContextMenu': UIComponents.ContextMenu,
    'ContextMenuTrigger': UIComponents.ContextMenuTrigger,
    'ContextMenuContent': UIComponents.ContextMenuContent,
    'ContextMenuItem': UIComponents.ContextMenuItem,
    'ContextMenuCheckboxItem': UIComponents.ContextMenuCheckboxItem,
    'ContextMenuRadioItem': UIComponents.ContextMenuRadioItem,
    'ContextMenuLabel': UIComponents.ContextMenuLabel,
    'ContextMenuSeparator': UIComponents.ContextMenuSeparator,
    'ContextMenuShortcut': UIComponents.ContextMenuShortcut,
    'ContextMenuGroup': UIComponents.ContextMenuGroup,
    'ContextMenuPortal': UIComponents.ContextMenuPortal,
    'ContextMenuSub': UIComponents.ContextMenuSub,
    'ContextMenuSubContent': UIComponents.ContextMenuSubContent,
    'ContextMenuSubTrigger': UIComponents.ContextMenuSubTrigger,
    'ContextMenuRadioGroup': UIComponents.ContextMenuRadioGroup,
    
    // Dialog
    'Dialog': UIComponents.Dialog,
    'DialogClose': UIComponents.DialogClose,
    'DialogContent': UIComponents.DialogContent,
    'DialogDescription': UIComponents.DialogDescription,
    'DialogFooter': UIComponents.DialogFooter,
    'DialogHeader': UIComponents.DialogHeader,
    'DialogOverlay': UIComponents.DialogOverlay,
    'DialogPortal': UIComponents.DialogPortal,
    'DialogTitle': UIComponents.DialogTitle,
    'DialogTrigger': UIComponents.DialogTrigger,
    
    // Drawer
    'Drawer': UIComponents.Drawer,
    'DrawerPortal': UIComponents.DrawerPortal,
    'DrawerOverlay': UIComponents.DrawerOverlay,
    'DrawerTrigger': UIComponents.DrawerTrigger,
    'DrawerClose': UIComponents.DrawerClose,
    'DrawerContent': UIComponents.DrawerContent,
    'DrawerHeader': UIComponents.DrawerHeader,
    'DrawerFooter': UIComponents.DrawerFooter,
    'DrawerTitle': UIComponents.DrawerTitle,
    'DrawerDescription': UIComponents.DrawerDescription,
    
    // Dropdown Menu
    'DropdownMenu': UIComponents.DropdownMenu,
    'DropdownMenuPortal': UIComponents.DropdownMenuPortal,
    'DropdownMenuTrigger': UIComponents.DropdownMenuTrigger,
    'DropdownMenuContent': UIComponents.DropdownMenuContent,
    'DropdownMenuGroup': UIComponents.DropdownMenuGroup,
    'DropdownMenuLabel': UIComponents.DropdownMenuLabel,
    'DropdownMenuItem': UIComponents.DropdownMenuItem,
    'DropdownMenuCheckboxItem': UIComponents.DropdownMenuCheckboxItem,
    'DropdownMenuRadioGroup': UIComponents.DropdownMenuRadioGroup,
    'DropdownMenuRadioItem': UIComponents.DropdownMenuRadioItem,
    'DropdownMenuSeparator': UIComponents.DropdownMenuSeparator,
    'DropdownMenuShortcut': UIComponents.DropdownMenuShortcut,
    'DropdownMenuSub': UIComponents.DropdownMenuSub,
    'DropdownMenuSubTrigger': UIComponents.DropdownMenuSubTrigger,
    'DropdownMenuSubContent': UIComponents.DropdownMenuSubContent,
    
    // Form
    'FormItem': UIComponents.FormItem,
    'FormLabel': UIComponents.FormLabel,
    'FormControl': UIComponents.FormControl,
    'FormDescription': UIComponents.FormDescription,
    'FormMessage': UIComponents.FormMessage,
    'FormField': UIComponents.FormField,
    
    // Hover Card
    'HoverCard': UIComponents.HoverCard,
    'HoverCardTrigger': UIComponents.HoverCardTrigger,
    'HoverCardContent': UIComponents.HoverCardContent,
    
    // Input OTP
    'InputOTP': UIComponents.InputOTP,
    'InputOTPGroup': UIComponents.InputOTPGroup,
    'InputOTPSlot': UIComponents.InputOTPSlot,
    'InputOTPSeparator': UIComponents.InputOTPSeparator,
    
    // Input
    'Input': UIComponents.Input,
    
    // Label
    'Label': UIComponents.Label,
    
    // Menubar
    'Menubar': UIComponents.Menubar,
    'MenubarPortal': UIComponents.MenubarPortal,
    'MenubarMenu': UIComponents.MenubarMenu,
    'MenubarTrigger': UIComponents.MenubarTrigger,
    'MenubarContent': UIComponents.MenubarContent,
    'MenubarGroup': UIComponents.MenubarGroup,
    'MenubarSeparator': UIComponents.MenubarSeparator,
    'MenubarLabel': UIComponents.MenubarLabel,
    'MenubarItem': UIComponents.MenubarItem,
    'MenubarShortcut': UIComponents.MenubarShortcut,
    'MenubarCheckboxItem': UIComponents.MenubarCheckboxItem,
    'MenubarRadioGroup': UIComponents.MenubarRadioGroup,
    'MenubarRadioItem': UIComponents.MenubarRadioItem,
    'MenubarSub': UIComponents.MenubarSub,
    'MenubarSubTrigger': UIComponents.MenubarSubTrigger,
    'MenubarSubContent': UIComponents.MenubarSubContent,
    
    // Navigation Menu
    'NavigationMenu': UIComponents.NavigationMenu,
    'NavigationMenuList': UIComponents.NavigationMenuList,
    'NavigationMenuItem': UIComponents.NavigationMenuItem,
    'NavigationMenuContent': UIComponents.NavigationMenuContent,
    'NavigationMenuTrigger': UIComponents.NavigationMenuTrigger,
    'NavigationMenuLink': UIComponents.NavigationMenuLink,
    'NavigationMenuIndicator': UIComponents.NavigationMenuIndicator,
    'NavigationMenuViewport': UIComponents.NavigationMenuViewport,
    
    // Pagination
    'Pagination': UIComponents.Pagination,
    'PaginationContent': UIComponents.PaginationContent,
    'PaginationLink': UIComponents.PaginationLink,
    'PaginationItem': UIComponents.PaginationItem,
    'PaginationPrevious': UIComponents.PaginationPrevious,
    'PaginationNext': UIComponents.PaginationNext,
    'PaginationEllipsis': UIComponents.PaginationEllipsis,
    
    // Popover
    'Popover': UIComponents.Popover,
    'PopoverTrigger': UIComponents.PopoverTrigger,
    'PopoverContent': UIComponents.PopoverContent,
    'PopoverAnchor': UIComponents.PopoverAnchor,
    
    // Progress
    'Progress': UIComponents.Progress,
    
    // Radio Group
    'RadioGroup': UIComponents.RadioGroup,
    'RadioGroupItem': UIComponents.RadioGroupItem,
    
    // Resizable
    'ResizablePanelGroup': UIComponents.ResizablePanelGroup,
    'ResizablePanel': UIComponents.ResizablePanel,
    'ResizableHandle': UIComponents.ResizableHandle,
    
    // Scroll Area
    'ScrollArea': UIComponents.ScrollArea,
    'ScrollBar': UIComponents.ScrollBar,
    
    // Select
    'Select': UIComponents.Select,
    'SelectContent': UIComponents.SelectContent,
    'SelectGroup': UIComponents.SelectGroup,
    'SelectItem': UIComponents.SelectItem,
    'SelectLabel': UIComponents.SelectLabel,
    'SelectScrollDownButton': UIComponents.SelectScrollDownButton,
    'SelectScrollUpButton': UIComponents.SelectScrollUpButton,
    'SelectSeparator': UIComponents.SelectSeparator,
    'SelectTrigger': UIComponents.SelectTrigger,
    'SelectValue': UIComponents.SelectValue,
    
    // Separator
    'Separator': UIComponents.Separator,
    
    // Sheet
    'Sheet': UIComponents.Sheet,
    'SheetTrigger': UIComponents.SheetTrigger,
    'SheetClose': UIComponents.SheetClose,
    'SheetContent': UIComponents.SheetContent,
    'SheetHeader': UIComponents.SheetHeader,
    'SheetFooter': UIComponents.SheetFooter,
    'SheetTitle': UIComponents.SheetTitle,
    'SheetDescription': UIComponents.SheetDescription,
    
    // Sidebar
    'Sidebar': UIComponents.Sidebar,
    'SidebarContent': UIComponents.SidebarContent,
    'SidebarFooter': UIComponents.SidebarFooter,
    'SidebarGroup': UIComponents.SidebarGroup,
    'SidebarGroupAction': UIComponents.SidebarGroupAction,
    'SidebarGroupContent': UIComponents.SidebarGroupContent,
    'SidebarGroupLabel': UIComponents.SidebarGroupLabel,
    'SidebarHeader': UIComponents.SidebarHeader,
    'SidebarInput': UIComponents.SidebarInput,
    'SidebarInset': UIComponents.SidebarInset,
    'SidebarMenu': UIComponents.SidebarMenu,
    'SidebarMenuAction': UIComponents.SidebarMenuAction,
    'SidebarMenuBadge': UIComponents.SidebarMenuBadge,
    'SidebarMenuButton': UIComponents.SidebarMenuButton,
    'SidebarMenuItem': UIComponents.SidebarMenuItem,
    'SidebarMenuSkeleton': UIComponents.SidebarMenuSkeleton,
    'SidebarMenuSub': UIComponents.SidebarMenuSub,
    'SidebarMenuSubButton': UIComponents.SidebarMenuSubButton,
    'SidebarMenuSubItem': UIComponents.SidebarMenuSubItem,
    'SidebarProvider': UIComponents.SidebarProvider,
    'SidebarRail': UIComponents.SidebarRail,
    'SidebarSeparator': UIComponents.SidebarSeparator,
    'SidebarTrigger': UIComponents.SidebarTrigger,
    
    // Skeleton
    'Skeleton': UIComponents.Skeleton,
    
    // Slider
    'Slider': UIComponents.Slider,
    
    // Toaster
    'Toaster': UIComponents.Toaster,
    
    // Switch
    'Switch': UIComponents.Switch,
    
    // Table
    'Table': UIComponents.Table,
    'TableHeader': UIComponents.TableHeader,
    'TableBody': UIComponents.TableBody,
    'TableFooter': UIComponents.TableFooter,
    'TableHead': UIComponents.TableHead,
    'TableRow': UIComponents.TableRow,
    'TableCell': UIComponents.TableCell,
    'TableCaption': UIComponents.TableCaption,
    
    // Tabs
    'Tabs': UIComponents.Tabs,
    'TabsList': UIComponents.TabsList,
    'TabsTrigger': UIComponents.TabsTrigger,
    'TabsContent': UIComponents.TabsContent,
    
    // Textarea
    'Textarea': UIComponents.Textarea,
    
    // Toggle Group
    'ToggleGroup': UIComponents.ToggleGroup,
    'ToggleGroupItem': UIComponents.ToggleGroupItem,
    
    // Toggle
    'Toggle': UIComponents.Toggle,
    
    // Tooltip
    'Tooltip': UIComponents.Tooltip,
    'TooltipTrigger': UIComponents.TooltipTrigger,
    'TooltipContent': UIComponents.TooltipContent,
    'TooltipProvider': UIComponents.TooltipProvider,
  };

  return componentMap[componentName];
}